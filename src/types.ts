export type Page = 'home' | 'about' | 'projects' | 'ecosystem' | 'contact';

export interface NavItem {
  label: string;
  id: Page;
}

export interface PageProps {
  onPageChange: (page: Page) => void;
}
