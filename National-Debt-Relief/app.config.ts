import { ExpoConfig, ConfigContext } from 'expo/config';

module.exports = ({ config }: ConfigContext): ExpoConfig => {
    if (process.env.MY_ENVIRONMENT === 'production') {
      return {
        ...config,
        slug: 'National-Debt-Relief',
        name: 'National Debt Relief',
        ios: {
            bundleIdentifier: 'com.NationalDebtRelief',
        },
        android: {
            package: 'com.NationalDebtRelief',
        },
     
      };
    } else {
      return {
        ...config,
        slug: 'National-Debt-Relief',
        name: 'National Debt Relief',
      };
    }
  };
