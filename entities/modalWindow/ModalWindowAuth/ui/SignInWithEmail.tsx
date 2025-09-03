import Button from "@/shared/ui/Button";
import {SignInWithEmailPropsTypes} from "@/entities/modalWindow/ModalWindowAuth/types/Types";

export default function SignInWithEmail({signInByPhone}: SignInWithEmailPropsTypes) {
    return (
        <div className='flex flex-col'>
            <form
                className='flex flex-col justify-around items-center'
            >
                <input
                    placeholder='Email'
                    className='w-[70%] h-[40px] bg-gray-200 rounded-[8px] text-[16px] mb-[30px] p-[10px]'
                />
                <Button
                    borderColor='black'
                    backgroundColor={'black'}
                    className='text-white text-[18px]'
                    width={'330'}
                >
                    Sign in
                </Button>
            </form>
            <button className='hover:cursor-pointer mt-[10px]' onClick={signInByPhone}>Sign in with phone</button>
        </div>
    )
}