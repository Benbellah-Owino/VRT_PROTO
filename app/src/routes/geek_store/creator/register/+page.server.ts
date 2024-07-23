import { fail } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const data: FormData = await request.formData();

        if (data.get("password") != data.get("confirm_password")) {
            return fail(422, {
                description: data.get('confirm_password'),
                error: "Passwords don't match"
            })
        }
        console.log(data);
    }
}


