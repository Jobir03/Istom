"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ role }: { role: string }) => {
    const router = useRouter();
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("role");
        if (user) {
            setUserRole(user);
        }
    }, [userRole]);

    // const links = [
    //     { label: "Статистика", path: `/cabinet/${role}/statistics` },
    //     {
    //         label: "Избранные товары",
    //         path: `/cabinet/${role}/featured-products`,
    //     },
    //     { label: "История товары", path: `/cabinet/${role}/product-history` },
    //     { label: "Товары", path: `/cabinet/${role}/products` },
    //     { label: "Выход", path: `/` },
    // ];

    return (
        <aside className="sidebar h-screen hidden lg:block pe-5">
            <ul className="space-y-2">
                {userRole === "Партнер" && (
                    <li>
                        <Link
                            className="text-[18px]"
                            href={`/cabinet/${role}/statistics`}
                        >
                            Статистика
                        </Link>
                    </li>
                )}
                <li>
                    <Link
                        className="text-[18px]"
                        href={`/cabinet/${role}/featured-products`}
                    >
                        Избранные товары
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-[18px]"
                        href={`/cabinet/${role}/product-history`}
                    >
                        История товары
                    </Link>
                </li>
                {userRole === "Партнер" && (
                    <li>
                        <Link
                            className="text-[18px]"
                            href={`/cabinet/${role}/products`}
                        >
                            Товары
                        </Link>
                    </li>
                )}
                <li
                    onClick={() => {
                        localStorage.clear();
                        router.push("/");
                    }}
                >
                    <Link className="text-[18px]" href={"/"}>
                        Выход
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
