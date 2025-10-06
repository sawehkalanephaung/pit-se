import { FormEvent, useMemo, useState } from 'react';
import donateImage from '../../../assets/photos/donate.png';
import { defaultDonationAmounts } from '../../data/donations';
import DonationAmountOption from '../../components/forms/donation_amount_option';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const MIN_DONATION = 1;

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(
    defaultDonationAmounts[0]
  );
  const [customAmount, setCustomAmount] = useState('');
  const [error, setError] = useState<string | undefined>();

  const activeAmount = useMemo(() => {
    if (customAmount) {
      return Number(customAmount);
    }

    return selectedAmount ?? undefined;
  }, [customAmount, selectedAmount]);

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setError(undefined);
  };

  const handleCustomAmountChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const sanitized = value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*?)\..*/g, '$1')
      .replace(/(?<=\.\d{2}).*/, '');

    setCustomAmount(sanitized);

    if (sanitized) {
      const parsed = Number(sanitized);
      setSelectedAmount(Number.isFinite(parsed) ? parsed : null);
    } else {
      setSelectedAmount(defaultDonationAmounts[0]);
    }

    setError(undefined);
  };

  const handleDonate = () => {
    const amount = activeAmount;

    if (!amount || Number.isNaN(amount) || amount < MIN_DONATION) {
      setError('Please choose or enter an amount of at least $1.');
      return;
    }

    // eslint-disable-next-line no-console
    console.log('Submitting donation for $', amount.toFixed(2));
  };

  return (
    <section
      id="donate"
      className="bg-white border-t border-slate-100"
      aria-labelledby="donate-section-title"
    >
      <div className="grid w-full max-w-6xl gap-10 px-6 py-16 mx-auto lg:grid-cols-2 lg:items-center">
        <div className="flex w-full h-full lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
          <img
            src={donateImage}
            alt="Illustration of a hand holding a piggy bank"
            className="object-cover w-full h-full shadow-lg rounded-2xl max-h-80 lg:max-h-full"
            loading="lazy"
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-[0_28px_60px_rgba(15,23,42,0.08)]">
          <div className="space-y-3 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
              Support Our Work
            </p>
            <h2
              id="donate-section-title"
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              Help us keep simulations free for learners everywhere.
            </h2>
            <p className="text-sm text-slate-600">
              Your donation keeps access free for all learners and allows us to keep creating
              high-quality STEM resources.
            </p>
          </div>

          <div
            className="grid gap-4 mt-8 sm:grid-cols-2"
            role="group"
            aria-label="Choose a donation amount"
          >
            {defaultDonationAmounts.map((amount) => (
              <DonationAmountOption
                key={amount}
                amount={amount}
                active={!customAmount && selectedAmount === amount}
                onClick={() => handleSelectAmount(amount)}
              />
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <Input
              label="Custom amount"
              type="text"
              inputMode="decimal"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className={customAmount ? 'border-blue-400 focus:border-blue-500' : undefined}
              helperText="Enter a custom amount if none of the preset options fit."
              error={error}
              aria-describedby={error ? 'donation-error' : undefined}
            />
          </div>

          <div className="mt-8">
            <Button
              className="justify-center w-full px-8 py-3 text-base rounded-2xl"
              onClick={handleDonate}
            >
              Donate Now
            </Button>
            {error && (
              <p id="donation-error" className="mt-3 text-sm text-red-500">
                {error}
              </p>
            )}
            {activeAmount && !error && (
              <p className="mt-3 text-xs text-slate-500" aria-live="polite">
                Selected amount: ${activeAmount.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateSection;
