import { Dispatch, SetStateAction } from "react";

export interface IELWord {
  ID: number;
  辞書順: number;
  学年?: number;
  単元名: string;
  頁?: number;
  英語: string;
  品詞: string;
  意味: string;
}

export interface IMenu {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
