import axios from "axios";
const apiUrl = "/api/waitlist";

type ApiResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

export const jointWaitlist = async (email: string): Promise<ApiResponse> => {
  try {
    const response = await axios.post(apiUrl, { email });
    return response.data;
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
