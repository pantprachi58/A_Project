"use client";

import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Star } from "lucide-react";
import { toast } from "react-toastify";
import styles from "./Reviews.module.scss";

export default function ReviewModal({ show, onHide }) {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", rating: 0, comment: "" },
  });

  const rating = watch("rating");

  const onSubmit = async () => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    toast.success("Thank you for your review! It will be published after approval.");
    reset();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Share Your Experience</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              placeholder="Your full name"
              isInvalid={!!errors.name}
              {...register("name", { required: "Please enter your name" })}
            />
            <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              isInvalid={!!errors.email}
              {...register("email", {
                required: "Please enter your email",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
              })}
            />
            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Controller
              name="rating"
              control={control}
              rules={{ min: { value: 1, message: "Please select a rating" } }}
              render={({ field }) => (
                <div className={styles.ratingPicker}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      className={styles.ratingStar}
                      onClick={() => field.onChange(i + 1)}
                      aria-label={`${i + 1} star`}
                    >
                      <Star size={24} fill={i < rating ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              )}
            />
            {errors.rating && <div className={styles.errorText}>{errors.rating.message}</div>}
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Review Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Tell us about your experience..."
              isInvalid={!!errors.comment}
              {...register("comment", {
                required: "Please write a review",
                minLength: { value: 10, message: "Please write at least 10 characters in your review" },
              })}
            />
            <Form.Control.Feedback type="invalid">{errors.comment?.message}</Form.Control.Feedback>
          </Form.Group>
          <p className="text-muted small mb-0">Your review will be published after admin approval</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={onHide}>
            Cancel
          </Button>
          <Button type="submit" className="btn-gradient border-0" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Review"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
