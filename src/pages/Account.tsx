import { useEffect } from 'react'
import SideBar from '../components/loggedin/SideBar'
import AccountHeader from '../components/loggedin/account/AccountHeader'
import AccountList from '../components/loggedin/account/AccountList'
import SummaryCards from '../components/loggedin/account/SummaryCards'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getAllAccounts } from '@/redux/slices/accountSlice'

const Account = () => {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getAllAccounts());
  },[]);

  //const { allAccounts } = useAppSelector((state)=> state.account);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <SideBar activePage='account' />
      <div className="lg:ml-64 min-h-screen">
        <AccountHeader />

        <main className='p-6 lg:p-8'>
            <SummaryCards />
            <AccountList />

        </main>
      </div>
    </div>
  )
}

export default Account