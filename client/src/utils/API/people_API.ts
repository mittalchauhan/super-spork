import { API } from "./API";
import { User } from "./user_API";

export interface Project {
  Firstname: string;
  Lastname: string;
  role: string;
  Email: string;
  Id: string;
  members: string[];
  administrators: string[];
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface CreateProject {
  success: boolean;
  error: string;
  data: Project;
}
export const createProject = async (
  project: Partial<Project>
): Promise<CreateProject> => {
  try {
    const { data } = await API.post<any>("/project", project);
    return data;
  } catch (err) {
    return err;
  }
};

// export interface GetUsers {
//   success: boolean;
//   data: User;
// }
// export const getIssue = async (id: string): Promise<GetIssue> => {
//   try {
//     const { data } = await API.get<any>(`/issue/${id}`);
//     return data;
//   } catch (err) {
//     return err;
//   }
// };
export interface GetProject {
  success: boolean;
  data: Project;
}
export const getProject = async (id: string): Promise<GetProject> => {
  try {
    const { data } = await API.get<any>(`/project/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const getProjectByKey = async (key: string): Promise<GetProject> => {
  try {
    const { data } = await API.get<any>(`/project/${key}`);
    return data;
  } catch (err) {
    return err;
  }
};

export interface GetProjects {
  success: boolean;
  data: Project[];
  error: string;
}
export const getProjects = async (): Promise<GetProjects> => {
  try {
    const { data } = await API.get<any>("/projects");
    return data;
  } catch (err) {
    return err;
  }
};

export interface UpdateProject {
  success: boolean;
  message: string;
}
export const updateProject = async (
  id: string,
  project: Partial<Project>
): Promise<UpdateProject> => {
  try {
    const { data } = await API.put<any>(`/project/${id}`, project);
    return data;
  } catch (err) {
    return err;
  }
};

export interface DeleteProject {
  success: boolean;
  id: string;
  error: string;
}
export const deleteProject = async (id: string): Promise<DeleteProject> => {
  try {
    const { data } = await API.delete<any>(`/project/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};
