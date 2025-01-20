export const APIURLS = {
  LOGIN: '/api/auth/login',
  CHANGE_PASSWORD: '/api/auth/change-password',
  FORGET_PASSWORD: '/resetPassword', // send email when forget password
  RESET_PASSWORD: '/resetPassword/resetPassword',
  REFRESH_TOKEN: 'refreshToken', //get token from refresh token
  VERIFY_TOKEN: '/api/auth/validatetoken', // verify token on refresh
  GOOGLE_LOGIN: 'passport/auth/google/callback',
  GET_COUNTRY_MASTER: '/api/masters/getCountriesList',
  GET_STATE_MASTER: '/api/masters/getStatesList',
  GET_REGION_MASTER: '/api/masters/getRegionsList',
  GET_COMPANY_MASTER: '/api/masters/getCompaniesList',
  GET_COMPANY_LOCATION_MASTER: '/api/masters/getCompanyLocations',
  GET_ACCOUNT_TYPE_MASTER: '/api/masters/getBankAccountTypes',
  GET_ACCOUNTS_MASTER: '/api/masters/getCompanyAccounts',
  GET_PRODUCTION_TYPE_MASTER: '/api/masters/getProductionTypes',
  GET_INDUSTRY_MASTER: '/api/masters/getIndustryMasters',
  GET_INDUSTRY_GROUP_MASTER: '/api/masters/getGroupIndustries',
  GET_INDUSTRY_HEAD_MASTER: '/api/masters/getIndustryHeads',
  GET_SALES_MASTER: '/api/masters/getSalesManagers',
  GET_ACCOUNT_MANAGER_MASTER: '/api/masters/getAccountManagers',
  GET_TECHNOLOGY_GROUP_MASTER: '/api/masters/getTechnologyGroups',
  GET_TECHNOLOGY_SUBGROUP_MASTER: '/api/masters/getTechnologySubgroups',
  GET_TECHNOLOGY_MASTER: '/api/masters/getTechnologyNames',

  GET_PRODUCT_MASTER: '/api/masters/productList',
  GET_PROJECT_MASTER: '/api/masters/projectList',
  GET_TAX_MASTER: '/api/masters/taxTypeList',
  GET_CLIENT_MASTER: '/api/masters/clientsList',
  GET_CLIENT_BILL_TO_MASTER: '/api/masters/getClientBillingInfo',
  GET_CLIENT_SHIP_TO_MASTER: '/api/masters/getClientShippingInfo',
  GET_OEM_MASTER: '/api/masters/getOEMs',
  // POLESTAR PRODUCT 
  GET_POLESTAR_PRODUCT_MASTER:'/api/masters/getPoleStarProducts',
  CREATE_POLESTAR_PRODUCT_MASTER:'/api/masters/createPoleStarProduct',
  UPDATE_POLESTAR_PRODUCT_MASTER:'/api/masters/updatePoleStarProduct',
  TOGGLE_POLESTAR_PRODUCT_MASTER_STATUS:'/api/masters/activateDeactivatePoleStarProduct',
  // PROJECT SERVICE
  GET_PROJECT_SERVICE_MASTER:'/api/masters/getProjectService',
  CREATE_PROJECT_SERVICE_MASTER:'/api/masters/createProjectService',
  UPDATE_PROJECT_SERVICE_MASTER:'/api/masters/updateProjectService',
  TOGGLE_PROJECT_SERVICE_MASTER_STATUS:'/api/masters/activateDeactivateProjectService',

  // Client Type

  GET_CLIENT_TYPE_MASTER: '/api/masters/getClientType',
  CREATE_CLIENT_TYPE_MASTER: '/api/masters/createClientType',
  UPDATE_CLIENT_TYPE_MASTER: '/api/masters/updateClientType',
  TOGGLE_CLIENT_TYPE_MASTER_STATUS: '/api/masters/activateDeactivateClientType',


  // FINANCIAL YEAR
  GET_FINANCIAL_YEAR_MASTER: '/api/masters/getAllFinancialYearsHandler',
  CREATE_FINANCIAL_YEAR_MASTER: '/api/masters/createFinancialYear',
  UPDATE_FINANCIAL_YEAR_MASTER: '/api/masters/updateFinancialYearHandler',
  TOGGLE_FINANCIAL_YEAR_MASTER_STATUS: '/api/masters/activateDeactivateFinancialYear',

  // CURRENCY
  GET_CURRENCY_MASTER: '/api/masters/getCurrency',
  CREATE_CURRENCY_MASTER: '/api/masters/createCurrency',
  UPDATE_CURRENCY_MASTER: '/api/masters/updateCurrency',
  TOGGLE_CURRENCY_STATUS: '/api/masters/activateOrDeactivateCurrency',
  CURRENCY_HISTORY_DATA: '/api/masters/currencyHistory',

  // TAXES
  GET_TAXES:'/api/masters/getTax',
  CREATE_TAXES:'/api/masters/createTax',
  UPDATE_TAXES:'/api/masters/updateTax',
  TOGGLE_TAX_STATUS:'/api/masters/activateOrDeactivateTax',


  GET_CONTRACT_MASTER: '/api/masters/',
  TOGGLE_COUNTRY: '/api/masters/activateDeactivateCountry',
  TOGGLE_STATE_STATUS: '/api/masters/activateDeactivateState',
  TOGGLE_REGION_STATUS: '/api/masters/activateDeactivateRegion',
  TOGGLE_COMPANY_STATUS: '/api/masters/activateDeactivateCompany',
  TOGGLE_COMPANY_LOCATION_STATUS: '/api/masters/activateDeactivateCompanyLocation',
  TOGGLE_ACCOUNT_TYPE_STATUS: '/api/masters/activateDeactivateBankAccountType',
  TOGGLE_ACCOUNTS_STATUS: '/api/masters/activateDeactivateCompanyAccount',
  TOGGLE_PRODUCTION_TYPE_STATUS: '/api/masters/activateOrDeactivateProductionType',
  TOGGLE_INDUSTRY_STATUS: '/api/masters/activateOrDeactivateIndustryMaster',
  TOGGLE_INDUSTRY_GROUP_STATUS: '/api/masters/activateOrDeactivateGroupIndustry',
  TOGGLE_INDUSTRY_HEAD_STATUS: '/api/masters/activateOrDeactivateIndustryHead',
  TOGGLE_SALES_STATUS: '/api/masters/activateOrDeactivateSalesManager',
  TOGGLE_ACCOUNT_MANAGER_STATUS: '/api/masters/activateOrDeactivateAccountsManager',
  TOGGLE_TECHNOLOGY_GROUP_STATUS: '/api/masters/activateDeactivateTechnologyGroup',
  TOGGLE_TECHNOLOGY_SUBGROUP_STATUS: '/api/masters/activateDeactivateTechnologySubgroup',
  TOGGLE_TECHNOLOGY_STATUS: '/api/masters/activateDeactivateTechnologyName',
  
  TOGGLE_PRODUCT_STATUS: '/api/masters/toggleProductActiveStatus',
  TOGGLE_PROJECT_STATUS: '/api/masters/toggleProjectActiveStatus',
  TOGGLE_TAX_TYPE_STATUS: '/api/masters/toggleTaxTypeActiveStatus',
  TOGGLE_CLIENT_STATUS: '/api/masters/toggleClientsActiveStatus',
  TOGGLE_CLIENT_BILL_TO_STATUS: '/api/masters/toggleClientBillingActiveStatus',
  TOGGLE_CLIENT_SHIP_TO_STATUS: '/api/masters/toggleClientShippingActiveStatus',
  TOGGLE_CONTRACT_STATUS: '/api/masters/',
  CREATE_COUNTRY: '/api/masters/addCountry',
  CREATE_STATE_MASTER: '/api/masters/addState',
  CREATE_REGION_MASTER: '/api/masters/addRegion',
  CREATE_COMPANY_MASTER: '/api/masters/addCompany',
  CREATE_COMPANY_LOCATION_MASTER: '/api/masters/createCompanyLocation',
  CREATE_ACCOUNT_TYPE_MASTER: '/api/masters/createBankAccountType',
  CREATE_ACCOUNTS_MASTER: '/api/masters/createCompanyAccount',
  CREATE_PRODUCTION_TYPE_MASTER: '/api/masters/createProductionType',
  CREATE_INDUSTRY_MASTER: '/api/masters/createIndustryMaster',
  CREATE_INDUSTRY_GROUP_MASTER: '/api/masters/createGroupIndustry',
  CREATE_INDUSTRY_HEAD_MASTER: '/api/masters/createIndustryHead',
  CREATE_SALES_MASTER: '/api/masters/createSalesManager',
  CREATE_OEM_MASTER: '/api/masters/createOEM',
  CREATE_ACCOUNT_MANAGER_MASTER: '/api/masters/createAccountManager',
  CREATE_TECHNOLOGY_GROUP_MASTER: '/api/masters/createTechnologyGroup',
  CREATE_TECHNOLOGY_SUBGROUP_MASTER: '/api/masters/createTechnologySubgroup',
  CREATE_TECHNOLOGY_MASTER: '/api/masters/createTechnologyName',

  CREATE_PRODUCT_MASTER: '/api/masters/addProduct',
  CREATE_PROJECT_MASTER: '/api/masters/addProject',
  CREATE_TAX_MASTER: '/api/masters/addTaxType',
  CREATE_CLIENT_MASTER: '/api/masters/addClient',
  CREATE_CLIENT_BILL_TO_MASTER: '/api/masters/addClientBillingInfo',
  CREATE_CLIENT_SHIP_TO_MASTER: '/api/masters/addClientShippingInfo',
  CREATE_CONTRACT_MASTER: '/api/masters/',
  UPDATE_COUNTRY: '/api/masters/updateCountry',
  UPDATE_STATE_MASTER: '/api/masters/updateState',
  UPDATE_REGION_MASTER: '/api/masters/updateRegion',
  UPDATE_COMPANY_MASTER: '/api/masters/updateCompany',
  UPDATE_COMPANY_LOCATION_MASTER: '/api/masters/updateCompanyLocation',
  UPDATE_ACCOUNT_TYPE_MASTER: '/api/masters/updateBankAccountType',
  UPDATE_ACCOUNTS_MASTER: '/api/masters/updateCompanyAccount',
  UPDATE_PRODUCTION_TYPE_MASTER: '/api/masters/updateProductionType',
  UPDATE_INDUSTRY_MASTER: '/api/masters/updateIndustryMaster',
  UPDATE_INDUSTRY_GROUP_MASTER: '/api/masters/updateGroupIndustry',
  UPDATE_INDUSTRY_HEAD_MASTER: '/api/masters/updateIndustryHead',
  UPDATE_SALES_MASTER: '/api/masters/updateSalesManager',
  UPDATE_ACCOUNT_MANAGER_MASTER: '/api/masters/updateAccountsManager',
  UPDATE_TECHNOLOGY_GROUP_MASTER: '/api/masters/updateTechnologyGroup',
  UPDATE_TECHNOLOGY_SUBGROUP_MASTER: '/api/masters/updateTechnologySubgroup',
  UPDATE_TECHNOLOGY_MASTER: '/api/masters/updateTechnologyName',

  UPDATE_PRODUCT_MASTER: '/api/masters/updateProduct',
  UPDATE_PROJECT_MASTER: '/api/masters/updateProject',
  UPDATE_TAX_MASTER: '/api/masters/updateTaxType',
  UPDATE_CLIENT_MASTER: '/api/masters/updateClientDetails',
  UPDATE_CLIENT_BILL_TO_MASTER: '/api/masters/updateClientBillingInfo',
  UPDATE_CLIENT_SHIP_TO_MASTER: '/api/masters/updateClientShippingInfo',
  UPDATE_OEM_MASTER: '/api/masters/updateOEM',
  UPDATE_CONTRACT_MASTER: '/api/masters/',

  // Activate DEACTIVAE
  TOGGLE_OEM_STATUS:'/api/masters/activateDeactivateOEM',

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
  GET_REGION_HEAD_MASTER: '/api/masters/getRegionHeadsList',
  CREATE_REGION_HEAD_MASTER: '/api/masters/addRegionHead',
  UPDATE_REGION_HEAD_MASTER: '/api/masters/updateRegionHead',
  TOGGLE_REGION_HEAD_STATUS: '/api/masters/activateDeactivateRegionHead',
 
}
