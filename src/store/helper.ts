export const handleApiCallError = (err: any, rejectWithValue: any) => {
  if (err?.body?.message) {
    return rejectWithValue(err.body);
  }
  const message: any = { message: err.message };
  return rejectWithValue(message);
};
