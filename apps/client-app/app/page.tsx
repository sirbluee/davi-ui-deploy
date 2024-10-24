import HomePage from "./home/Home";

export const metadata = {
  title: "DAVI | Home",
  description:
    "Welcome to DAVI - An all-in-one platform for data analysis, visualization, and integration. Empower your team to make data-driven decisions faster and smarter.",
  openGraph: {
    title: "Home",
    description:
      "Welcome to DAVI - An all-in-one platform for data analysis, visualization, and integration. Empower your team to make data-driven decisions faster and smarter.",
    images:
      "https://sabaicode.s3.ap-east-1.amazonaws.com/Frame%201171275924.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2JOBFKXU7ALNYXUL%2F20241024%2Fap-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241024T040048Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCWFwLWVhc3QtMSJIMEYCIQCSgNnTRIxhUrZBPB77oIuFP3JSHqeanV3FZNt35RwPlgIhANR97T%2FVPdqrn8lZYlcrf79hXSqmfQUklLkULiKnBZ0mKvECCM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNzA3NDY0MDkxMTEzIgwq3sKU8aasVqttlw8qxQLycq3ZUC7Z0jVcXxEX6739WgZ4VT3%2FZ%2F7hkJ5cj7jKowqvXvMYs%2B9jjifx6Rm%2Bm2tCLgCHCiK7dAg9989rDMs0io1g%2Bf8PvZsOywJ57%2FAZM%2BBL2U3%2BO9J29J%2BgEAShESDwsPnfGqZtnBYBV%2Br2Qq12jIzZM256o00kwUClvmR850%2BAbCYfhWgFnTX7NzwGNRmrfHeyBCpOuhrt6fv33A0pvp8uaRDFftPMicyRaNgY1UmvB9%2F62X4UqR978bMWNJr5dCQITOBbRhqKgOcI%2Falfo%2BMwgayTKyWJk1HXsC26WVR8A4rNBbdL7LyZFb0t7ncPXGJ8XmNC0qXfjHdGOKxNSHPDshe%2FlcJ8x09YRXeTJ%2FJTvIwpZawwUnVH81OaaHH5aBROYwQLVtmI%2FLb%2BhHE4QOGQdWcGRC8yGiKHciEWreTXfb6ZMIWL57gGOrIC9Kc27RdtAktclDRUCuI8CAi%2Fh%2BJs8eqXy%2BhLLZmUpZ2E0bAj40q%2B3q%2B7wLU5TRuyFzVH7cb0V4zjdB%2BA%2B7cnAs9htFq1VoO%2FPcjbTFd72K88x1eJjxfpIqW9yXTiFVc%2BeJ4keiFAAsAsFx68uDj6G%2FHvcAk%2Bhfl3FZyiUddhrp8cw7uE5IPT4v3v6Drj0%2F2rHbmJu5Gr1lGEVhYX2Zf8gfwkWTXPC8wuq2aWp%2BJJCbcWvr2iwaZ6BZin4OkTluAmol8IdD6zIpcFrgtGEmIXN73r%2F95lTx1QitMqrTE6%2BilutQgK2VEXyLkNQtghUCUJWQ9%2BlhvTd82oQG07Ib1H9%2FgHxpIIG%2F2Fz4AHBkellHt3ZUY9IRf4ORA3p%2BQzphKUbwxSzOHt56M4NteTmX41LIB0&X-Amz-Signature=986cd3160044a99f783103af85bcae9d1b3c87bc9c5393c395d60d5b3945352a&X-Amz-SignedHeaders=host&response-content-disposition=inline",
  },
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
