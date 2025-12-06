import { DollarSign, Eye, EyeOff, Lock, Mail, User, X } from "lucide-react";
import { useState } from "react";
import type { SignupInputs } from "../../types/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { createUser } from "../../redux/slices/authSlice";

const SignupModal = ({ setShowLoginModal, authMode, setAuthMode }: any) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const onSubmitHandler: SubmitHandler<SignupInputs> = async (data) => {
    console.log(data);
    const result = dispatch(createUser(data));
    console.log(result);
  };

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupInputs>();

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={() => setShowLoginModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {authMode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-400">
            {authMode === "login"
              ? "Log in to access your dashboard"
              : "Start managing your finances today"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                {...register("fullName")}
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                required={authMode === "signup"}
              />
              {errors.root && <span>This field is required</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
              />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
              {errors.password && <span>This field is required</span>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium"
          >
            {authMode === "login" ? "Log In" : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Already have an account?{" "}
            <button
              onClick={() => setAuthMode("login")}
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Log in
            </button>
          </p>
        </div>
        <p className="mt-4 text-xs text-center text-gray-500">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
