'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { FiCheckCircle, FiAlertCircle, FiLoader, FiUser, FiCreditCard, FiEdit2 } from 'react-icons/fi';

export default function PaymentPage() {
  const [upiId, setUpiId] = useState('johndoe@upi');
  const [amount, setAmount] = useState('');
  const [remark, setRemark] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateUpi = (id: string) => /^[\w.-]+@[\w]+$/.test(id);
  const validateAmount = (value: string) => !isNaN(Number(value)) && Number(value) > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateUpi(upiId)) {
      setError('❌ Please enter a valid UPI ID');
      return;
    }

    if (!validateAmount(amount)) {
      setError('❌ Enter a valid amount greater than 0');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(`✅ ₹${amount} successfully sent to ${upiId}`);
      setUpiId('johndoe@upi');
      setAmount('');
      setRemark('');
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-indigo-100 dark:from-[#1e1e2f] dark:to-[#2a2a40]">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="max-w-xl mx-auto p-4 sm:p-10">
          {/* Page Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-1 tracking-tight">
              💳 UPI Payment
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Secure & instant payment transfer interface</p>
          </div>

          {/* Payment Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#2a2a40] shadow-2xl rounded-2xl p-6 space-y-6 transition-all duration-300"
          >
            {/* UPI ID */}
            <div className="relative">
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                UPI ID
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">
                  <FiUser />
                </span>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g. name@bank"
                  className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3a3a55] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Amount */}
            <div className="relative">
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">
                  <FiCreditCard />
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 500"
                  className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3a3a55] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Remark */}
            <div className="relative">
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Remark
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">
                  <FiEdit2 />
                </span>
                <input
                  type="text"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  placeholder="e.g. Tuition fees"
                  className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#3a3a55] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-lg font-semibold text-white rounded-lg transition duration-300 ease-in-out shadow ${
                loading
                  ? 'bg-indigo-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.01]'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <FiLoader className="animate-spin" /> Processing...
                </span>
              ) : (
                'Pay Now'
              )}
            </button>

            {/* Feedback */}
            {error && (
              <div className="mt-2 text-red-600 flex items-center gap-2 text-sm">
                <FiAlertCircle /> <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="mt-2 text-green-600 flex items-center gap-2 text-sm animate-pulse">
                <FiCheckCircle /> <span>{success}</span>
              </div>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}
