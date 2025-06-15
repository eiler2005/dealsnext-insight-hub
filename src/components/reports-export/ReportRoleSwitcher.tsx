
import { Button } from "@/components/ui/button";

type Role = "manager" | "director";

interface Props {
  role: Role;
  setRole: (role: Role) => void;
}

export default function ReportRoleSwitcher({ role, setRole }: Props) {
  return (
    <div className="flex gap-2">
      <Button
        variant={role === "manager" ? "default" : "outline"}
        size="sm"
        onClick={() => setRole("manager")}
      >
        Менеджер
      </Button>
      <Button
        variant={role === "director" ? "default" : "outline"}
        size="sm"
        onClick={() => setRole("director")}
      >
        Руководитель
      </Button>
    </div>
  );
}
