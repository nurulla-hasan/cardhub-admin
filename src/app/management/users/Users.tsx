import PageLayout from "@/components/common/page-layout";
import {
  usersColumns,
  type User,
} from "@/components/management/users/users-columns";
import { UsersFilter } from "@/components/management/users/users-filter";
import { DataTable } from "@/components/ui/custom/data-table";
import PageHeader from "@/components/ui/custom/page-header";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    phone: "+1 (555) 012-3456",
    joiningDate: "Oct 24, 2024",
    totalSpent: "$2,450.00",
    collectionValue: "$5,200.00",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    phone: "+1 (555) 012-3457",
    joiningDate: "Oct 22, 2024",
    totalSpent: "$1,200.00",
    collectionValue: "$3,150.00",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    phone: "+1 (555) 012-3458",
    joiningDate: "Oct 20, 2024",
    totalSpent: "$593.00",
    collectionValue: "$1,800.00",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    phone: "+1 (555) 012-3459",
    joiningDate: "Oct 18, 2024",
    totalSpent: "$3,100.00",
    collectionValue: "$7,500.00",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    phone: "+1 (555) 012-3460",
    joiningDate: "Oct 15, 2024",
    totalSpent: "$150.00",
    collectionValue: "$450.00",
  },
  {
    id: 6,
    name: "Sophia Taylor",
    email: "sophia.taylor@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    phone: "+1 (555) 012-3461",
    joiningDate: "Oct 12, 2024",
    totalSpent: "$840.00",
    collectionValue: "$1,200.00",
  },
  {
    id: 7,
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    phone: "+1 (555) 012-3462",
    joiningDate: "Oct 10, 2024",
    totalSpent: "$1,750.00",
    collectionValue: "$3,900.00",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    phone: "+1 (555) 012-3463",
    joiningDate: "Oct 08, 2024",
    totalSpent: "$2,100.00",
    collectionValue: "$4,600.00",
  },
  {
    id: 9,
    name: "James Wilson",
    email: "james.wilson@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    phone: "+1 (555) 012-3464",
    joiningDate: "Oct 05, 2024",
    totalSpent: "$430.00",
    collectionValue: "$950.00",
  },
  {
    id: 10,
    name: "William Davis",
    email: "william.davis@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=William",
    phone: "+1 (555) 012-3465",
    joiningDate: "Oct 01, 2024",
    totalSpent: "$920.00",
    collectionValue: "$2,100.00",
  },
];

const meta = {
  total: users.length,
  page: 1,
  limit: 10,
  totalPages: 4,
};

const Users = () => {
  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <PageHeader
          title="User Management"
          description="User all Platform Users"
          length={users.length}
        />

        <UsersFilter />
      </div>

      <DataTable columns={usersColumns} data={users} meta={meta} />
    </PageLayout>
  );
};

export default Users;
