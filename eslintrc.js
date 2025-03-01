module.exports = {
  plugins: ['@typescript-eslint', 'react', 'import'], // Eklentileri burada belirtin
  rules: {
    '@typescript-eslint/no-unused-vars': 'error', // Eklenti önekini kullanın
    'react/jsx-uses-vars': 'error', // Eklenti önekini kullanın
    'import/order': 'error', // Eklenti önekini kullanın
  },
};
