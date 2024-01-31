function generateRandomAccountNumber() {
   // Create prefix for account number
   const prefix = 'ACC';

   // Generate a timestamp (useful for uniqueness)
   const timestamp = Date.now();

   // Generate random digits
   const randomDigits = Math.floor(Math.random() * 10);

   const accountNumber = `${prefix}${timestamp}.${randomDigits}`.replace(
      '.',
      ''
   );
   return accountNumber;
}
