"use client"
import { ExitIcon } from "@radix-ui/react-icons"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"

import { 
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger 
} from "./ui/alert-dialog"
import { Button } from "./ui/button"


export function Logout () {
    
    const { logout } = usePrivy()
    const router = useRouter()

    
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="gap-2" variant="outline">
                    <ExitIcon/>
                    <span className="max-md:hidden">Close Link</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action will log you off the internet. 
                    You can no longer access your favorite websites & apps
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                    <Button
                        onClick={async ()=>{
                            await logout()
                            router.push("/")
                        }}
                        className="gap-2"
                    >
                        <ExitIcon/>
                        Continue
                    </Button>
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}