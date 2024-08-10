import {useEffect, useState} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {Image} from "@open-api";
import ImageUploader from "@components/uploader";
import {FlattenFile} from "@pages/dashboard/files/form/_deps/file-flatten.type";
import SettingsModal from "@components/settings-modal";
import {useModalDispatch} from "@contexts/modal/modal.context";
import {ModalId} from "@contexts/modal/modal.type";

const MAX_UPLOAD_COUNT = Number(import.meta.env.VITE_MAX_UPLOAD_COUNT || 11);

interface Props<FormObject extends Record<string, any>> {
  name: keyof FormObject;
  onChange?: (value: Image[]) => void;
  images?: Image[];
}

// TODO needs render optimization for the ImageUploader
export default function FormUploadImagesField<FormObject extends Record<string, any>>(
  props: Props<FormObject>,
) {
  const {name, onChange: onChangeImages, images: imagesFromOutside} = props;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {control, setValue, getValues, watch} = useFormContext<FlattenFile>();
  const {openModal} = useModalDispatch();
  const cards = Array.from(Array(MAX_UPLOAD_COUNT));
  const [images, setImages] = useState(imagesFromOutside || []);

  // HINT: images are stored in the component associated with their links ( also in
  // the localStorage by the parent component in create mode )
  // but form only includes their ids

  useEffect(() => {
    imagesFromOutside && Array.isArray(imagesFromOutside) && setImages(imagesFromOutside);
  }, [imagesFromOutside]);

  const handleSelectAsMain = () => {
    setValue("main_image", getValues("images")![activeIndex]);
  };

  const handleRemove = (index = activeIndex) => {
    const newImages = images.filter((_, i) => index !== i);
    const newIds = newImages.map((img) => img.id);
    // pick another image id as main image if main image is going to be removed
    if (watch("main_image") === getValues("images")![index]) {
      setValue("main_image", newImages.length ? newImages[0].id : undefined);
    }
    setImages(newImages);
    setValue("images", newIds);
    onChangeImages?.(newImages);
  };

  return (
    <>
      <Controller
        name={name as any}
        control={control}
        render={({field, fieldState: {error}}) => (
          <div>
            <div className="w-full grid grid-cols-3 gap-3">
              {cards.map((_, index) => (
                <ImageUploader
                  key={index}
                  src={images[index]?.image}
                  disabled={index > 0 && !field.value[index - 1]} // the prev card is still empty
                  onClick={() => {
                    setActiveIndex(index);
                    openModal(ModalId.ImageSettings);
                  }}
                  onError={() => handleRemove(index)}
                  onUpload={(image) => {
                    // set the first image id as main image on first upload
                    !images.length && setValue("main_image", image.id);
                    const newImages = [...images, image];
                    const newIds = newImages.map((img) => img.id);
                    setImages(newImages);
                    field.onChange(newIds);
                    onChangeImages?.(newImages);
                  }}
                  caption={
                    watch("main_image") && watch("main_image") === field.value[index]
                      ? "عکس اصلی"
                      : undefined
                  }
                />
              ))}
            </div>
            {error && <p className="text-error text-sm mt-2">{error.message}</p>}
          </div>
        )}
      />

      <SettingsModal
        title="تنظیمات عکس"
        uniqueId={ModalId.ImageSettings}
        items={[
          {
            iconPath: "/icons/gallery-tick.svg",
            text: "انتخاب به عنوان عکس اصلی",
            onClick: handleSelectAsMain,
          },
          {
            iconPath: "/icons/gallery-remove.svg",
            text: "حذف عکس",
            onClick: handleRemove,
          },
        ]}
      />
    </>
  );
}
