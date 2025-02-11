"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

interface Breadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((p) => p !== "");

  // Generate breadcrumb items array
  const items: Breadcrumb[] = [
    {
      href: "/",
      label: "Home",
      isCurrent: segments.length === 0,
    },
  ];

  let accumulatedPath = "";
  for (const segment of segments) {
    accumulatedPath += `/${segment}`;
    items.push({
      href: accumulatedPath,
      label: segment,
      isCurrent: accumulatedPath === pathname,
    });
  }

  const humanizeLabel = (label: string) => {
    return label.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  // Handle edge cases where there are fewer than 3 items
  if (items.length <= 1) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Handle cases where there are more than 3 items
  if (items.length > 3) {
    const firstItem = items[0];
    const middleItems = items.slice(1, -2);
    const lastTwoItems = items.slice(-2);

    return (
      <Breadcrumb>
        <BreadcrumbList>
          {/* First Item */}
          <BreadcrumbItem>
            <BreadcrumbLink href={firstItem?.href ?? "/"}>
              {humanizeLabel(firstItem?.label ?? "")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {/* Middle Items (Collapsed) */}
          {middleItems.length > 0 && (
            <>
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {middleItems.map((item) => (
                      <DropdownMenuItem key={item.href}>
                        <BreadcrumbLink href={item.href}>
                          {humanizeLabel(item.label)}
                        </BreadcrumbLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {/* Last Two Items */}
          {lastTwoItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {index === lastTwoItems.length - 1 ? (
                  <BreadcrumbPage>{humanizeLabel(item.label)}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>
                    {humanizeLabel(item.label)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < lastTwoItems.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Default case (2-3 items)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <BreadcrumbItem>
              {index === items.length - 1 ? (
                <BreadcrumbPage>{humanizeLabel(item.label)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>
                  {humanizeLabel(item.label)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
