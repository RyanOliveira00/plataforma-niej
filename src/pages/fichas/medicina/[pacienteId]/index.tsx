import { RecordLayout } from "@/components/layouts/RecordLayout";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import { users, type CardUserProps } from "..";

export const medical_appointments = {
  anamnese: [
    {
      id: "1",
      type: "ficha_gaia",
      date: "01/01/2000",
    },
  ],
};

export default function Medicina() {
  // PEGAR PARAMETROS DA ROTA
  const router = useRouter();
  const { pacienteId } = router.query;

  const [selectUser] = useState<CardUserProps>(
    users.find((user) => user.id === pacienteId!)!,
  );
  const [selectMenu, setSelectMenu] = useState<"anamnese" | "exame-fisico">(
    "anamnese",
  );

  return (
    <RecordLayout>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md bg-white px-4 py-16 shadow-2xl sm:w-[600px]">
        <h1 className="bold text-xl">Medicina</h1>

        <div className="relative flex w-full flex-col gap-4 px-2 pt-8">
          <button
            className="absolute left-0 top-0 flex items-center
              gap-1 text-sm text-gray-400"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon className="h-6 w-6" />
            Voltar
          </button>

          <ProfileUser user={selectUser} />

          <div className="flex items-center gap-4 overflow-y-auto border-b-2 border-gray-300 px-2 py-4">
            <button
              className={
                selectMenu === "anamnese"
                  ? "border-b-2 border-blue-400"
                  : "text-gray-400 transition-colors hover:text-gray-600"
              }
              onClick={() => setSelectMenu("anamnese")}
            >
              Anamnese
            </button>

            <div className="h-6 min-w-[1px] bg-gray-300" />

            <button
              className={
                selectMenu === "exame-fisico"
                  ? "border-b-2 border-blue-400"
                  : "text-gray-400 transition-colors hover:text-gray-600"
              }
              onClick={() => setSelectMenu("exame-fisico")}
            >
              Exame Físico
            </button>
          </div>

          <button className="flex items-center gap-2 self-end text-sm text-gray-400 transition-colors hover:text-gray-600 focus:outline-none">
            <PlusIcon className="h-6 w-6" />
            Criar
          </button>

          <div className="flex flex-col gap-4 overflow-y-auto">
            {
              {
                anamnese: medical_appointments.anamnese.map((anamnese) => (
                  <div
                    key={anamnese.date}
                    className="flex cursor-pointer items-center justify-between rounded-md bg-gray-300 px-4 py-2 shadow-sm transition-all hover:bg-gray-400 hover:shadow-lg"
                  >
                    <span className="text-sm">{anamnese.date}</span>
                    <ChevronRightIcon className="h-6 w-6" />
                  </div>
                )),
                "exame-fisico": <div>exame-fisico</div>,
              }[selectMenu]
            }
          </div>
        </div>
      </div>
    </RecordLayout>
  );
}

type ProfileUserProps = {
  user: { name: string; cpf: string };
};

function ProfileUser({ user }: ProfileUserProps) {
  return (
    <div className="flex w-full flex-col gap-1 rounded-md border border-gray-300 bg-gray-100 px-4 py-2">
      <span className="text-sm">Nome: {user.name}</span>
      <span className="text-sm">Nome Social: Pipoca</span>
      <span className="text-sm">CPF: {user.cpf}</span>
      <span className="text-sm">RG: 123456789</span>
      <span className="text-sm">Data de Nascimento: 01/01/2000</span>
      <span className="text-sm">Idade: 21</span>
      <span className="text-sm">Responsável: Pipoca</span>
    </div>
  );
}
