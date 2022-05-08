const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    bank_name: { type: 'string' },
    phone: { type: 'string' },
    full_name: { type: 'string' },
    citizen_id: { type: 'string' },
    user_name: { type: 'string' },
    password: { type: 'string' },
    smart_otp: { type: 'string' },
  },
  require: [
    'id, bank_name, phone, full_name, citizen_id, user_name, password, smart_otp ',
  ],
  additionalProperties: false,
};

export default User;
