export const APIURLS = {
  LOGIN: '/api/auth/login',
  CHANGE_PASSWORD: '/api/auth/change-password',
  FORGET_PASSWORD: '/resetPassword', // send email when forget password
  RESET_PASSWORD: '/resetPassword/resetPassword',
  REFRESH_TOKEN: 'refreshToken', //get token from refresh token
  VERIFY_TOKEN: 'vt', // verify token on refresh
  GOOGLE_LOGIN: 'passport/auth/google/callback',
  GET_COMPANY_MASTER: '/api/masters/getCompaniesList',
  GET_CURRENCY_MASTER: '/api/masters/currencyList',
  GET_INDUSTRY_MASTER: '/api/masters/industryList',
  GET_ACCOUNTS_MASTER: '/api/masters/accountsList',
  GET_PRODUCT_MASTER: '/api/masters/productList',
  GET_PROJECT_MASTER: '/api/masters/projectList',
  GET_TAX_MASTER: '/api/masters/taxTypeList',
  GET_COUNTRY_MASTER: '/api/masters/countriesList',
  GET_STATE_MASTER: '/api/masters/statesList',
  GET_CLIENT_MASTER: '/api/masters/clientsList',
  GET_CLIENT_BILL_TO_MASTER: '/api/masters/getClientBillingInfo',
  GET_CLIENT_SHIP_TO_MASTER: '/api/masters/getClientShippingInfo',
  GET_CONTRACT_MASTER: '/api/masters/',
  TOGGLE_COMPANY_STATUS: '/api/masters/activateDeactivate',
  TOGGLE_CURRENCY_STATUS: '/api/masters/toggleCurrencyActiveStatus',
  TOGGLE_INDUSTRY_STATUS: '/api/masters/toggleIndustryActiveStatus',
  TOGGLE_ACCOUNTS_STATUS: '/api/masters/toggleAccountActiveStatus',
  TOGGLE_PRODUCT_STATUS: '/api/masters/toggleProductActiveStatus',
  TOGGLE_PROJECT_STATUS: '/api/masters/toggleProjectActiveStatus',
  TOGGLE_TAX_STATUS: '/api/masters/toggleTaxTypeActiveStatus',
  TOGGLE_STATES_STATUS: '/api/masters/toggleStateActiveStatus',
  TOGGLE_CLIENT_STATUS: '/api/masters/toggleClientsActiveStatus',
  TOGGLE_CLIENT_BILL_TO_STATUS: '/api/masters/toggleClientBillingActiveStatus',
  TOGGLE_CLIENT_SHIP_TO_STATUS: '/api/masters/toggleClientShippingActiveStatus',
  TOGGLE_CONTRACT_STATUS: '/api/masters/',
  CREATE_COMPANY_MASTER: '/api/masters/add-company',
  CREATE_CURRENCY_MASTER: '/api/masters/addCurrency',
  CREATE_ACCOUNTS_MASTER: '/api/masters/addAccount',
  CREATE_INDUSTRY_MASTER: '/api/masters/addIndustry',
  CREATE_PRODUCT_MASTER: '/api/masters/addProduct',
  CREATE_PROJECT_MASTER: '/api/masters/addProject',
  CREATE_TAX_MASTER: '/api/masters/addTaxType',
  CREATE_STATE_MASTER: '/api/masters/addState',
  CREATE_CLIENT_MASTER: '/api/masters/addClient',
  CREATE_CLIENT_BILL_TO_MASTER: '/api/masters/addClientBillingInfo',
  CREATE_CLIENT_SHIP_TO_MASTER: '/api/masters/addClientShippingInfo',
  CREATE_CONTRACT_MASTER: '/api/masters/',
  UPDATE_COMPANY_MASTER: '/api/masters/edit',
  UPDATE_CURRENCY_MASTER: '/api/masters/updateCurrency',
  UPDATE_ACCOUNTS_MASTER: '/api/masters/updateAccountDetails',
  UPDATE_INDUSTRY_MASTER: '/api/masters/updateIndustry',
  UPDATE_PRODUCT_MASTER: '/api/masters/updateProduct',
  UPDATE_PROJECT_MASTER: '/api/masters/updateProject',
  UPDATE_TAX_MASTER: '/api/masters/updateTaxType',
  UPDATE_STATE_MASTER: '/api/masters/updateState',
  UPDATE_CLIENT_MASTER: '/api/masters/updateClientDetails',
  UPDATE_CLIENT_BILL_TO_MASTER: '/api/masters/updateClientBillingInfo',
  UPDATE_CLIENT_SHIP_TO_MASTER: '/api/masters/updateClientShippingInfo',
  UPDATE_CONTRACT_MASTER: '/api/masters/',
  LOGOUT: 'logout',
  LOGOUT_ALL: 'logout/all',
  COUNTRY: 'masters/countries',
  STATES: 'masters/states',
  CITIES: 'masters/cities',
  CALENDER: 'masters/calendar',
  BRANDS: 'inventory/brands',
  VOUCHERS: 'inventory/voucher',
  BRAND_FILTERS: 'inventory/brands/list',
  VOUCHER_PAYMENT: 'inventory/voucher/payment',
  VOUCHER_EXCEL_PARSE: 'inventory/voucher/excel/parse',
  VOUCHER_EXCEL_ADD: 'inventory/voucher/excel/add',
  INVENTORY_DASHBOARD: 'inventory/dashboard',
  COUPON_WITH_ZERO_INVETORY: 'inventory/brands/notAvailabe',
  PAYMENT: 'inventory/voucher/payment',
  VOUCHER_LIST: 'inventory/voucherPayment',
  FILES: 'files',
  PAYMENT_VOUCHER: '/inventory/voucher',
  BRAND_WISE_REPORT: 'inventory/reports/brandWise',
  DENOMINATION_WISE_REPORT: 'inventory/reports/brandDenomWise',
  REDEEMED_COUPONS: 'inventory/redeemedCoupons',
  ORDERS_FAILED: 'inventory/voucher/ordersFailed',
  CONVERSION: 'conversion',
  // VOUCHERPAYMENT: 'inventory/voucherPayment',
  VOUCHER_EXPIRING: 'inventory/expiring',
  BRAND_WISE_INVENTORY: '/inventory/reports/brand',
  AGGREGATOR_PAYMENT: 'inventory/wallet',
  AGGREGATOR: 'inventory/clientDashboard',
  AGGREGATOR_BANK_LIST: 'inventory/voucher/bankList',
  ADMIN_BANK_LIST: 'masters/banklist',
  WALLETS: 'inventory/wallet/walletList',
  DROPDOWN_MASTER: 'inventory/brands/dropdown',
  DENOMINATION: 'inventory/brands/den',
  RECHARGES: 'vegaPro/wallet/transactions',
  CLIENT_LIST: 'vegaPro/wallet/clientList',
  ADMIN_CLIENT_LIST: 'inventory/clientDashboard/clientList',
  VIEW_RECHARGE_ATTACHMENT: 'aggregator/recharge',
  AGGREGATOR_WALLET_LIST: 'vegaPro/wallet/walletList',
  ADD_RECHARGE: 'vegaPro/wallet/recharge',
  MANAGE_USER: '/inventory/aggr/user',
  MANAGE_EDIT_USER: '/inventory/aggr/editUser',
  LAST_RECHARGE: 'vegaPro/wallet/lastRecharge',
  AGGREGATOR_DASHBOARD: 'vegaPro/dashboard',
  RECHARGE_REQUEST: 'inventory/wallet/rechargeRequest',
  APPROVE_REJECT_RECHARGE_REQUEST: 'inventory/wallet/approveRecharge',
  ADD_USER: 'inventory/aggr/user',
  AGGREGATOR_CLIENT_INFO: 'inventory/clientDashboard/clientDetails',
  AGGREGATOR_WALLET_INFO: 'inventory/clientDashboard/walletDetails',
  PLATFORM_PREFERENCE_PROFILE: 'vegaPro/aggregator',
  AGGREGRATOR_REDEEMED_COUPONS: 'vegaPro/redeemedCoupons',
  ADD_LOGO: 'vegaPro/setting/logo',
  AGGREGATOR_WALLET_DETAILS: 'vegaPro/dashboard/walletDetails',
  AGGREGATOR_OFFLINE_RECHARGE: 'inventory/wallet/recharge',
  PAYMENT_FILE_VIEWER: 'inventory/clientRecharge',
  ALL_CLIENTS: '/inventory/clientDashboard/aggregatorClientList',
  AGGREGATOR_USER: 'vegaPro/setting/user',
  AGGREGATOR_EDIT_USER: 'vegaPro/setting/editUser',
  ACTIVATE_WALLET: 'vegaPro/setting/activateWallet',
  GENERATE_TOKEN: 'vegaPro/setting/generateToken',
  // rename letter
  AGGREGATOR_INVOICE_NUMBER: 'masters/invoiceDropdown',
  GENERATE_INVOICE_NUMBER_TABLE_DATA: 'inventory/wallet/aggregatorInvoice',
  INVOICE_FORM_SUBMIT: 'inventory/wallet/invoice',
  ADD_STORE_RECHARGE: 'inventory/wallet/storeRecharge',
  STORE_DROPDOWN_LIST: 'inventory/wallet/store',
  STORE_RECHARGE_TABLE_DATA: 'inventory/wallet/storeRecharge',
  STORE_CARD_DATA: 'inventory/wallet/storeCardData',
  VIEW_STORE_INVOICE: 'inventory/storeRecharge',
  ACTIVATED_CLIENT_LIST: 'vegaPro/aggregator/getAllClients',
  VIEW_COMPANY_LOGO: 'aggregatorUser/logo',
  PENDING_INVOICES: 'vegaPro/wallet/pendingInvoice',
  DEACTIVATE_CLIENTS: 'vegaPro/aggregator/deactivateClient',
}
