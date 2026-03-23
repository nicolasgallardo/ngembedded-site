export const metadata = {
  title: "NG Embedded",
  description: "Embedded Systems & Hardware Consultant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
