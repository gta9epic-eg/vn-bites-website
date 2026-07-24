import { createClient } from "@/lib/supabase/server";
import { MenuClient } from "./menu-client";
import { MenuItem } from "@/types/database";

export const revalidate = 60; // Revalidate every minute

async function getMenuItems(): Promise<MenuItem[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("is_available", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }

  return data || [];
}

export default async function MenuPage() {
  const menuItems = await getMenuItems();

  return <MenuClient menuItems={menuItems} />;
}
