import prisma from "@/prisma/client";
import { User } from "@supabase/supabase-js";

async function handleUserProfile(user: User) {
  const existingProfile = await prisma.profile.findUnique({
    where: { userId: user.id },
  });

  if (!existingProfile) {
    await prisma.profile.create({
      data: {
        userId: user.id,
        // name: user.user_metadata.full_name || "",
      },
    });
  }
}

export default handleUserProfile;
