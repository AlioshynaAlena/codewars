// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import axios from "axios"
// import { useEffect } from "react"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import { BrowserRouter, Route, Routes } from "react-router"
// import { createRoot } from "react-dom/client"
// // Utils
// console.log = () => {}
// // Api
// const instance = axios.create({
//   baseURL: "
//   https://exams-frontend.kimitsu.it-incubator.io/api/
//     ",
// })
// const api = {
//   getUsers() {
//     /* 1 */
//     return instance.get("users")
//   },
// }
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
// const slice = createAppSlice({
//   name: "auth",
//   initialState: {
//     isLoading: false,
//     users: [] as any[],
//   },
//   selectors: {
//     selectIsLoading: (state) => state.isLoading,
//     selectUsers: (state) => state.users,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           /* 2 */
//           const res = await api.getUsers()
//           /* 3 */
//           return { users: res.data.items }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           /* 4 */
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
// const authReducer = slice.reducer
// const { setLoading, fetchUsers } = slice.actions
// const { selectUsers } = slice.selectors
// // Login
// const Login = () => {
//   const users = useAppSelector(selectUsers)
//   /* 5 */
//   return (
//     <div>
//       {
//         users.map
//         ((u) => (
//           <p key={
//             u.id
//           }>{
//             u.email
//           }</p>
//         ))}
//       <h1>
//         В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и последовательно, спокойно
//         расставить цифры в нужном порядке. Прежде чем давать ответ обязательно посчитайте к-во цифр и сверьте с
//         подсказкой. Удачи 🚀
//       </h1>
//     </div>
//   )
// }
// // App
// const App = () => {
//   /* 6 */
//   const dispatch = useAppDispatch()
//   useEffect(() => {
//     /* 7 */
//     dispatch(fetchUsers())
//   }, [])
//   /* 8 */
//   return (
//     <Routes>
//       <Route path={"/"} element={<Login />} />
//     </Routes>
//   )
// }
// // Store
// const store = configureStore({
//   reducer: {
//     [
//       slice.name
//       ]: authReducer,
//   },
// })
// type RootState = ReturnType<typeof store.getState>
//   type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// )
// // 📜 Описание:
// // Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// // 💡 Подсказка: будет 9 чисел.
// // Ответ дайте через пробел.
// // 🖥 Пример ответа: 1 2 3 4 5 6 7 8 9



  //
  // for (let i = 2; i <= 10; i+=2) {
  //   console.log(i)
  // }



//
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }



// console.log(1)
//
// setTimeout(function() {
//   console.log(9)
// }, 0)
//
// new Promise((resolve) => {
//   console.log(2)
//   resolve()
//   console.log(3)
// })
//   .then(function(){
//     console.log(5)
//   })
//   .then(function(){
//     console.log(7)
//   })
//
// Promise.resolve()
//   .then(function(){
//     console.log(6)
//   })
//   .then(function(){
//     console.log(8)
//   })
//
// console.log(4)