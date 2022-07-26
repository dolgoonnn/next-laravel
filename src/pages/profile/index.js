
import { getSession,signOut } from 'next-auth/react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import ProfileTab from '@/components/profileSideMenu';
import { useQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Profile({ user }) {
  const {query} = useRouter();

  const isTaboneSelected = !!query.Tabone;

    return(
        <div className="bg-pbackground">
          <Header/>
          <div className="p-10 grid bg-roadmap bg-cover gap-4 md:grid-cols-3">

            <div className="md:grid-col-span-1">
              <div className="h-full p-3 space-y-2 min-w-64 rounded-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center p-2 space-x-4">

                  {user.image && (
                    <span>
                    <img src={user.image} alt={user.name}  className="w-12 h-12 border rounded-full"/>
                    </span>
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <span className="flex items-center space-x-1">
                      <a rel="noopener noreferrer"  className="text-xs  dark:text-gray-400">{user.email}</a>
                    </span>
                  </div>
                </div>
                <div className="divide-y divide-gray-700">
                  <ul className="pt-2 pb-4 space-y-1 text-sm">

                    <ProfileTab href="/profile/settings" title="Personal information" isSelected={isTaboneSelected}/>

                    <ProfileTab href="/profile/NFT" title="Profile NFT" isSelected={isTabtwoSelected}/>

                    <ProfileTab href="/profile/settings" title="Personal information" isSelected={isTaboneSelected}/>


                  </ul>
                  <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                      <button onClick={() => signOut( {callbackUrl:'/'})} className="flex items-center p-2 space-x-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="md:col-span-2">
              <div className="h-full p-3 w-full rounded-md dark:bg-gray-900 dark:text-gray-100">
              </div>
            </div>

          </div>
          <Footer/>
        </div>

    )
  }

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session)
    if (!session) {
      context.res.writeHead(302, { Location: '/' });
      context.res.end();
      return {};
    }
    return {
      props: {
        user: session.user,
      },
    };
  }
