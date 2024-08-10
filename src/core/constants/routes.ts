export const routes = {
  root: "/",
  auth: "/auth",
  dashboard: "/dashboard",
  files: "/dashboard/files",
  archive: "/dashboard/files/archive",
  createFile: "/dashboard/files/create",
  viewFile: (fileNumber: number) => `/dashboard/files/${fileNumber}`,
  editFile: (fileNumber: number) => `/dashboard/files/${fileNumber}/edit`,
  createFileSuccessMessage: (fileNumber: number) => `/dashboard/files/create/${fileNumber}/success`,
  editFileSuccessMessage: (fileNumber: number) => `/dashboard/files/edit/${fileNumber}/success`,
};

export const routesTitle: {page: keyof typeof routes; pattern: RegExp; title: string}[] = [
  {
    page: "archive",
    title: "فایلینگ",
    pattern: new RegExp(/^\/dashboard\/files$/),
  },
  {
    page: "files",
    title: "بایگانی",
    pattern: new RegExp(/^\/dashboard\/files\/archive$/),
  },
  {
    page: "createFile",
    title: "ایجاد فایل",
    pattern: new RegExp(/^\/dashboard\/files\/create$/),
  },
  {
    page: "viewFile",
    title: "نمایش فایل",
    pattern: new RegExp(/^\/dashboard\/files\/\d+$/),
  },
  {
    page: "editFile",
    title: "ویرایش فایل",
    pattern: new RegExp(/^\/dashboard\/files\/\d+\/edit$/),
  },
  {
    page: "createFileSuccessMessage",
    title: "ایجاد فایل",
    pattern: new RegExp(/^\/dashboard\/files\/create\/\d+\/success$/),
  },
  {
    page: "editFileSuccessMessage",
    title: "ویرایش فایل",
    pattern: new RegExp(/^\/dashboard\/files\/edit\/\d+\/success$/),
  },
];
