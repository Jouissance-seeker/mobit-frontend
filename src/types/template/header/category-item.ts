export type TCategoryItem = {
  id: string;
  name: string;
  parent: string | null;
  refrence: string;
  picture_link: string | false;
  children: TCategoryItem[];
};
