import axiod from "https://deno.land/x/axiod/mod.ts";

const downloadLaunchData = async () => {
  let res = await axiod.post("https://reqres.in/api/users", {
    name: "Elon Musk",
    job: "billionaire",
  });
  console.log(res.data);
};

downloadLaunchData();
