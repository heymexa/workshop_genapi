import { useQuery, useMutation } from '@tanstack/react-query';
import a from 'axios';

var u="/",i=a.create({baseURL:u}),p=(t,e)=>{let r=a.CancelToken.source(),o=i({...t,...e,cancelToken:r.token}).then(({data:n})=>n);return o.cancel=()=>{r.cancel("Query was cancelled");},o};var c=(t,e)=>p({url:"/api/v1/test",method:"GET",signal:e},t),A=()=>["/api/v1/test"],m=t=>{let{query:e,request:r}=t??{};return {queryKey:(e==null?void 0:e.queryKey)??A(),queryFn:({signal:s})=>c(r,s),networkMode:"offlineFirst",...e}},q=t=>{let e=m(t),r=useQuery(e);return r.queryKey=e.queryKey,r},d=(t,e)=>p({url:"/api/v1/test",method:"POST",headers:{"Content-Type":"application/json"},data:t},e),f=t=>{let{mutation:e,request:r}=t??{};return {mutationFn:n=>{let{data:s}=n??{};return d(s,r)},...e}},w=t=>{let e=f(t);return useMutation(e)};

export { f as getTestApiCreateMutationOptions, A as getTestApiGetQueryKey, m as getTestApiGetQueryOptions, d as testApiCreate, c as testApiGet, w as useTestApiCreate, q as useTestApiGet };
