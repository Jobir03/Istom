import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GetDataToken, PostData } from '@/services.jsx/data';
import Image from 'next/image';
import UserIcon from '@/assets/icons/user-icon.svg';
import LogOutIcon from '@/assets/icons/log-out-icon.svg';
import { useRouter } from 'next/navigation';
import LoginBg from '@/assets/images/login-modal-bg.svg';
import PartnerLoginImage from '@/assets/images/partner-modal-img.png';
import ClientLoginImage from '@/assets/images/client-modal-img.png';

import Cookies from 'js-cookie';

export function AuthModal() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [fathername, setFathername] = useState('');
  const [number, setNumber] = useState('');
  const [err, setErr] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [userType, setUserType] = useState('Клиент');
  const router = useRouter();

  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('role');
    if (user) {
      setUserRole(user);
    }
  }, [userRole]);

  const HandleSignIn = () => {
    const data = {
      username: username,
      password: password,
    };
    PostData('api/v1/account/signin/', data)
      .then((res) => {
        localStorage.setItem('token', res?.access);
        if (localStorage.getItem('token')) {
          GetDataToken('api/v1/account/user/').then((res) => {
            localStorage.setItem('role', res?.groups[0]?.name);
          });
        }
        setIsOpen(false);
      })
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        setErr(true);
        setTimeout(() => {
          setErr(false);
          setUsername('');
          setPassword('');
        }, 2000);
      });
  };
  const HandleSignUp = () => {
    const data = {
      username: username,
      password: password,
      email: email,
      first_name: firstname,
      last_name: lastname,
      father_name: fathername,
      phone: number,
      role: userType,
    };
    PostData('api/v1/account/signup/', data)
      .then((res) => {
        setLogin(true);
      })
      .catch(() => {
        setErr(true);
        setTimeout(() => {
          setErr(false);
        }, 2000);
      });
  };

  const checkTokenExpiration = () => {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    checkTokenExpiration();
    const intervalId = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {userRole != '' ? (
        <>
          <Button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className={`ms-8 text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] hidden md:block`}
          >
            Выход
          </Button>
          <Link
            href={'/cabinet/partner/statistics'}
            className='block md:hidden'
          >
            <Image
              src={UserIcon}
              alt='Istom Logo'
              className='object-contain'
              priority
              width={22}
              height={22}
            />
          </Link>
        </>
      ) : (
        <>
          <div className='hidden md:block'>
            <DialogTrigger asChild>
              <Button
                className={`ms-8 relative font-aeonic text-[14px] bg-[#111318] hover:bg-[#111318] font-bold hover:brightness-[0.95] px-6 h-[60px] w-[150px] rounded-[8px]`}
              >
                <Image
                  src={LogOutIcon}
                  alt='Istom Logo'
                  className='object-contain absolute left-4 '
                  priority
                  width={18}
                  height={18}
                />
                Войти
              </Button>
            </DialogTrigger>
          </div>
          <div className='block md:hidden'>
            <DialogTrigger asChild>
              <Image
                src={UserIcon}
                alt='Istom Logo'
                className='object-contain'
                priority
                width={22}
                height={22}
              />
            </DialogTrigger>
          </div>
        </>
      )}

      <DialogContent
        className={` max-w-max rounded-[10px] pb-8 font-aeonic ${
          err ? 'bg-[#FF6565]' : 'bg-[#F4F4F4]'
        }`}
      >
        <DialogHeader className=''>
          <DialogTitle className='text-[30px] text-center font-bold font-cygre'>
            {err ? 'Что-то пошло не так' : 'Войдите как'}
          </DialogTitle>
          <p className='text-[#A7A7B2] !font-normal max-w-[300px] mx-auto leading-tight text-base text-center'>
            Выберите один из предложенных вариантов входа!
          </p>

          <DialogDescription className='flex items-center gap-3 pt-4'>
            <Link
              href='/cabinet/auth/partner-login'
              className='bg-[#111318] h-[90px] rounded-[5px] w-[250px] overflow-hidden flex items-center relative'
            >
              <span className='text-[17px] text-white font-bold ps-4 '>
                Войти как партнер
              </span>
              <Image
                src={LoginBg}
                alt='bg-img'
                className='object-cover flex-1 h-full'
              />
              <Image
                src={PartnerLoginImage}
                alt='login-shape'
                className='object-contain w-[67%]  h-full absolute top-0 -right-[1px]'
              />
            </Link>
            <Link
              href='/cabinet/auth/client-login'
              className='bg-[#FFB224] h-[90px] rounded-[5px] w-[250px] overflow-hidden flex items-center relative'
            >
              <span className='text-[17px] text-white font-bold ps-4 '>
                Войти как клиент
              </span>
              <Image
                src={LoginBg}
                alt='bg-img'
                className='object-cover flex-1 h-full'
              />
              <Image
                src={ClientLoginImage}
                alt='login-shape'
                className='object-contain w-[77%]  h-full absolute top-0 -right-[1px]'
              />
            </Link>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
