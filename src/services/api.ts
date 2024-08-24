import axios from "axios";

const API_BASE_URL = "https://shippex-demo.bc.brandimic.com/api/method";

export const login = async (username: string, password: string) => {
  const formData = new FormData();
  formData.append("usr", username);
  formData.append("pwd", password);

  try {
    const response = await axios.post(`${API_BASE_URL}/login`, formData);
    return response.data as {
      message: string;
      home_page: string;
      full_name: string;
    };
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to login");
  }
};

export const getShipmentByTrackingNumber = async (trackingNumber: string) => {
  const payload = {
    doctype: "AWB",
    filters: {
      name: ["like", `%${trackingNumber}%`],
    },
  };

  try {
    const response = await axios.get(`${API_BASE_URL}/frappe.client.get`, {
      data: payload,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch shipment"
    );
  }
};
