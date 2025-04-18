export const openWhatsAppChat = (message: string = "") => {
  const phone = "5532984738948";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  window.open(url, "_blank");
};
