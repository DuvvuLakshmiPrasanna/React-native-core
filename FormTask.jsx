import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, TouchableOpacity,TextInput,Alert,ScrollView, Image, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function FormTask() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    department: '',
  });

  const [errors, setErrors] = useState({});

  // Validation functions
  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const validatePassword = (password) => {
    // Password must contain at least one special character
    const specialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return password.length >= 6 && specialCharPattern.test(password);
  };

  const validateMobileNumber = (mobile) => {
    // Must start with 6-9 and be exactly 10 digits
    const mobilePattern = /^[6-9]\d{9}$/;
    return mobilePattern.test(mobile);
  };

  const validateDepartment = (department) => {
    return department.trim().length > 0;
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email must contain @ and valid domain';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters with special character';
    }

    if (!validateMobileNumber(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile must start with 6-9 and be 10 digits';
    }

    if (!validateDepartment(formData.department)) {
      newErrors.department = 'Department is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Form submitted successfully!', [
        {
          text: 'OK',
          onPress: () => {
            console.log('Form Data:', formData);
            // Reset form
            setFormData({
              name: '',
              email: '',
              password: '',
              mobileNumber: '',
              department: '',
            });
          },
        },
      ]);
    } else {
      Alert.alert('Validation Error', 'Please correct all errors');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      mobileNumber: '',
      department: '',
    });
    setErrors({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Validation Form</Text>

        {/* Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            placeholder="Enter your name"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        {/* Email Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Enter your email (with @)"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        {/* Password Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password *</Text>
          <TextInput
            style={[styles.input, errors.password && styles.inputError]}
            placeholder="Min 6 chars with special character (!@#$%^&*)"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        {/* Mobile Number Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mobile Number *</Text>
          <TextInput
            style={[styles.input, errors.mobileNumber && styles.inputError]}
            placeholder="10 digits starting with 6-9"
            value={formData.mobileNumber}
            onChangeText={(value) => handleInputChange('mobileNumber', value)}
            keyboardType="phone-pad"
            maxLength={10}
          />
          {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
        </View>

        {/* Department Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Department *</Text>
          <TextInput
            style={[styles.input, errors.department && styles.inputError]}
            placeholder="Enter your department"
            value={formData.department}
            onChangeText={(value) => handleInputChange('department', value)}
          />
          {errors.department && <Text style={styles.errorText}>{errors.department}</Text>}
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#333',
  },
  inputError: {
    borderColor: '#e74c3c',
    backgroundColor: '#fadbd8',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 6,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 30,
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#27ae60',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#95a5a6',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});