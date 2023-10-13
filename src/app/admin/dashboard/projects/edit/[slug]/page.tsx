import ProjectForm from "@/components/shared/projectForm/ProjectForm";
import { FormProvider } from "@/context/FormContext";
import { getSingleProject } from "@/utils/fetch/GetProjects";
import React, { Suspense } from "react";
import toast from "react-hot-toast";

type Props = {};

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getSingleProject(params.slug);

  return (
    <div>
      Edit Page
      {data ? (
        <FormProvider initialValues={data}>
          <Suspense fallback={<p className="m-auto">Loading...</p>}>
            <ProjectForm />
          </Suspense>
        </FormProvider>
      ) : (
        <div className="">No Project</div>
      )}
    </div>
  );
};

export default page;
