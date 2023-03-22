import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode,
}) {
    return (
        <html className="h-full bg-gray-50">
        <body className="h-full">
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
