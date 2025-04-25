/* eslint-disable @typescript-eslint/no-explicit-any */
import CabinetLayout from "@/components/common/Layout/CabinetLayout";

interface IProps {
    children: React.ReactNode;
    params: any;
}
export default function RoleLayout({ children, params }: IProps) {
    const { role } = params;

    return <CabinetLayout role={role}>{children}</CabinetLayout>;
}
