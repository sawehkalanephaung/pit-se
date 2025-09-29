import { FormEvent, useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

interface ContactFormValues {
  fullName: string;
  email: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

type SubmitState = 'idle' | 'loading' | 'success';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactDetails = [
  {
    label: 'Email',
    value: 'pit@learninglab.org',
    href: 'mailto:pit@learninglab.org',
    iconPath:
      'M2.25 4.5c0-1.243 1.007-2.25 2.25-2.25h15c1.243 0 2.25 1.007 2.25 2.25v15c0 1.243-1.007 2.25-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15Zm2.25-.75a.75.75 0 0 0-.75.75v.334l8.25 5.156 8.25-5.156V4.5a.75.75 0 0 0-.75-.75h-15Zm15.75 3.132-7.767 4.853a.75.75 0 0 1-.816 0L3.9 6.882V19.5a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V6.882Z',
  },
  {
    label: 'Phone',
    value: '+66 000 000 000',
    href: 'tel:+66000000000',
    iconPath:
      'M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h2.086c.966 0 1.797.676 1.967 1.626l.384 2.15c.145.812-.26 1.62-1.01 1.974l-1.28.612a.75.75 0 0 0-.352.984 11.21 11.21 0 0 0 5.649 5.65.75.75 0 0 0 .983-.353l.613-1.28a1.875 1.875 0 0 1 1.973-1.01l2.151.384a2.062 2.062 0 0 1 1.626 1.967V19.5a2.25 2.25 0 0 1-2.25 2.25h-1.5C8.552 21.75 2.25 15.448 2.25 7.5v-3Z',
  },
  {
    label: 'Address',
    value: '123 Learning Way, Bangkok',
    href: 'https://www.google.com/maps/search/?api=1&query=123+Learning+Way,+Bangkok',
    iconPath:
      'M12 2.25c-3.452 0-6.25 2.798-6.25 6.25 0 1.563.67 3.57 2.35 6.138 1.144 1.743 2.301 3.134 2.997 3.89a1.75 1.75 0 0 0 2.606 0c.696-.756 1.853-2.147 2.997-3.89 1.68-2.568 2.35-4.575 2.35-6.138 0-3.452-2.798-6.25-6.25-6.25Zm0 3a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z',
  },
];

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>({
    fullName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const isLoading = submitState === 'loading';
  const isSuccess = submitState === 'success';

  const handleChange = (field: keyof ContactFormValues) =>
    (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.currentTarget.value;
      setValues((prev) => ({ ...prev, [field]: nextValue }));

      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const validate = (): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email (name@domain.com).';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please share how we can help.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    const nextErrors = validate();

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setSubmitState('loading');

    window.setTimeout(() => {
      setSubmitState('success');
    }, 900);
  };

  return (
    <section
      id="contact"
      className="bg-white border-t border-slate-100"
      aria-labelledby="contact-section-title"
    >
      <div className="w-full max-w-6xl px-6 py-16 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl bg-blue-50 px-8 py-10 shadow-[0_24px_48px_rgba(37,99,235,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Get in Touch
            </p>
            <h2
              id="contact-section-title"
              className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl"
            >
              We would love to hear your feedback, questions, or ideas.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Connect with our team directly or drop us a message using the form.
            </p>

            <ul className="mt-10 space-y-6">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_12px_24px_rgba(37,99,235,0.12)]">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={detail.iconPath} />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide uppercase text-slate-500">
                      {detail.label}
                    </p>
                    <a
                      href={detail.href}
                      className="inline-flex mt-1 text-base font-medium text-blue-600 hover:text-blue-700"
                    >
                      {detail.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_48px_rgba(15,23,42,0.08)]">
            {isSuccess ? (
              <div
                className="flex flex-col items-start gap-3"
                role="status"
                aria-live="polite"
              >
                <span className="flex items-center justify-center w-12 h-12 text-green-600 bg-green-100 rounded-full">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.707 15.293 6.414 12l-1.414 1.414 4.707 4.707 9-9L17.293 7.293l-7.586 7.586Z" />
                  </svg>
                </span>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Message sent! We'll get back to you shortly.
                </h3>
                <p className="text-sm text-slate-600">
                  Thank you for reaching out. Our team usually responds within two business days.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Full Name"
                    name="fullName"
                    placeholder="Jane Doe"
                    value={values.fullName}
                    onChange={handleChange('fullName')}
                    error={errors.fullName}
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    required
                    inputMode="email"
                  />
                </div>
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Share your ideas or questions..."
                  value={values.message}
                  onChange={handleChange('message')}
                  error={errors.message}
                  required
                  rows={6}
                />
                <div>
                  <Button
                    type="submit"
                    className="px-8 py-3 text-base rounded-2xl"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending…' : 'Submit'}
                  </Button>
                  {Object.values(errors).some(Boolean) && (
                    <p className="mt-3 text-sm text-red-500" aria-live="polite">
                      Please fix the highlighted fields before submitting.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
