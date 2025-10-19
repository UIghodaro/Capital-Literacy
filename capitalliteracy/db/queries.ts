import { cache } from "react";
import db from "./drizzle";
import { eq } from "drizzle-orm";
import { userProgress } from "./schema";

export const getUserProgress = cache(async () => {
    const userId = "user_001"

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    });

    return data;
});

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();
    return data;
});
