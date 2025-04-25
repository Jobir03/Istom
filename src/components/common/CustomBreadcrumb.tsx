import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import React from "react";

interface CustomBreadcrumbProps {
  items: {
    name: string;
    link: string;
  }[];
}

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({ items }) => {
  return (
    <Breadcrumb className="mt-4 font-aeonic">
      <BreadcrumbList className="text-[14px]">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href={item.link}>{item.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
