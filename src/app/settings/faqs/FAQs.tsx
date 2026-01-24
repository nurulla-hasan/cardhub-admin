import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";

const FAQs = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="FAQs" 
          description="Manage frequently asked questions and support content." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          FAQs Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQs;
