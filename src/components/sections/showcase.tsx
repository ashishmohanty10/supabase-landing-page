import Image from "next/image";
import { Container } from "../container";
import { DB } from "../icon/db";
import { PostgresIcon } from "../icon/postgres-icon";
import { Tick } from "../icon/tick";

export const Showcase = () => {
  return (
    <Container>
      <div className="w-full flex gap-5">
        <PostgresDB />

        <div className="w-1/2 h-[40rem] flex gap-5">
          <div className="w-1/2 h-full bg-transparent-border rounded-2xl"></div>
          <div className="w-1/2 h-full bg-offWhite rounded-2xl"></div>
        </div>
      </div>
    </Container>
  );
};

const PostgresDB = () => {
  return (
    <div className="bg-tertiary-color flex p-5 w-1/2 h-[40rem] rounded-2xl justify-between border-transparent-border">
      <div className="flex flex-col items-stretch justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <DB />
            <p className="text-sm text-offWhite">Postgres Database</p>
          </div>

          <p className="text-secondary-text text-sm">
            Every project is{" "}
            <span className="text-offWhite">
              a full Postgres <br /> database
            </span>
            , the world's most trusted <br /> relational database
          </p>
        </div>

        <div>
          <p className="flex items-center space-x-2">
            <Tick className="w-4 h-4" />
            <span>100% profitable</span>
          </p>
          <p className="flex items-center space-x-2">
            <Tick className="w-4 h-4" />
            <span>Built in auth with RLS</span>
          </p>
          <p className="flex items-center space-x-2">
            <Tick className="w-4 h-4" />
            <span>Easy to extend</span>
          </p>
        </div>
      </div>

      <div className="group cursor-pointer relative">
        <Image
          src="/database-light.webp"
          alt="Db"
          width={800}
          height={800}
          className="w-full h-full absolute inset-0"
        />
        <PostgresIcon className="group-hover:text-brand text-offWhite w-full h-full relative z-10" />
      </div>
    </div>
  );
};
