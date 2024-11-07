import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogIn } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2 items-center">
      <div className="flex h-full flex-col justify-center p-52">
        <Image
          src={"/logo.svg"}
          width={173}
          height={39}
          alt="logotipo finance IA"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="text-base text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" className="mt-8">
            <LogIn /> Fazer login
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="login image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
