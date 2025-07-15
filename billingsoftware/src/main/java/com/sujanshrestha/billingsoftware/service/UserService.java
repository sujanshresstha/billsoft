package com.sujanshrestha.billingsoftware.service;

import com.sujanshrestha.billingsoftware.io.UserRequest;
import com.sujanshrestha.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);
    String getUserRole(String email);
    List<UserResponse> readUsers();
    void deleteUser(String id);
}
