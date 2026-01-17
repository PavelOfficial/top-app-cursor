export interface TopPageMenuItem {
  _id: {
    secondCategory: string;
  };
  pages: Array<{
    alias: string;
    title: string;
    _id: string;
    category: string;
  }>;
  isOpened?: boolean;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: Array<{
    alias: string;
    title: string;
    _id: string;
    category: string;
  }>;
  isOpened?: boolean;
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: number;
}

