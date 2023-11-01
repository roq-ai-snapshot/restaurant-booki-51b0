interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menus', 'Book a table', 'Edit personal info'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage restaurant bookings',
    'Manage restaurant employees',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/90e2328a-17e4-4068-a076-e33266e75333',
};
