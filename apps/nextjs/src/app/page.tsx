import { HydrateClient } from "~/trpc/server";
import { AuthShowcase } from "./_components/auth-showcase";
import { FloatingDVDs } from "./_components/floating-dvds";

export default function HomePage() {
  return (
    <HydrateClient>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container relative flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
          {/* Decorative DVD background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Large central DVD */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-20">
              <div className="h-full w-full rounded-full border-2 border-yellow-400/30 bg-gradient-to-br from-white/20 to-white/10">
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 shadow-inner" />
                <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30" />
              </div>
            </div>

            {/* Smaller decorative DVDs */}
            <div className="absolute left-[20%] top-[30%] h-32 w-32 opacity-15">
              <div className="h-full w-full rounded-full border border-yellow-400/20 bg-gradient-to-br from-white/20 to-white/10">
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="absolute right-[25%] top-[20%] h-24 w-24 opacity-15">
              <div className="h-full w-full rounded-full border border-yellow-400/20 bg-gradient-to-br from-white/20 to-white/10">
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          <div className="flex max-w-4xl flex-col items-center gap-8">
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
                Discover Your Next
                <span className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Favorite Film
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-yellow-100 drop-shadow-md sm:text-xl">
                Curated monthly movie selections delivered as DVDs with
                handwritten notes and exclusive forum access for fellow film
                enthusiasts.
              </p>
            </div>

            {/* Auth showcase - sign up CTA */}
            <div className="flex flex-col items-center gap-4">
              <AuthShowcase />
              <p className="text-sm text-yellow-200">
                Join our community of movie lovers
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="border-t border-yellow-400/30 py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-yellow-300">
                How It Works
              </h2>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-400 bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 text-2xl font-bold text-yellow-300">
                    1
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Share Your Taste
                  </h3>
                  <p className="text-yellow-100">
                    Tell us your favorite genres, directors, and films to
                    receive personalized recommendations tailored to your unique
                    preferences.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-400 bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 text-2xl font-bold text-yellow-300">
                    2
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Monthly Delivery
                  </h3>
                  <p className="text-yellow-100">
                    Receive a carefully curated DVD with custom artwork and a
                    handwritten note explaining why we chose it specifically for
                    you.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-400 bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 text-2xl font-bold text-yellow-300">
                    3
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Join the Discussion
                  </h3>
                  <p className="text-yellow-100">
                    Use your unique access code to join exclusive forums and
                    discuss the film with other viewers who received the same
                    movie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with DVD Visual */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tight text-yellow-300">
                    More Than Just Movies
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                      <div>
                        <h3 className="mb-2 font-semibold text-white">
                          Personalized Curation
                        </h3>
                        <p className="text-yellow-100">
                          Our film experts hand-pick movies based on your unique
                          preferences, viewing history, and mood ratings.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                      <div>
                        <h3 className="mb-2 font-semibold text-white">
                          Exclusive Community
                        </h3>
                        <p className="text-yellow-100">
                          Connect with fellow film enthusiasts who received the
                          same movie. Share insights, theories, and discussions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                      <div>
                        <h3 className="mb-2 font-semibold text-white">
                          Collector's Experience
                        </h3>
                        <p className="text-yellow-100">
                          Each DVD features custom artwork, exclusive bonus
                          content, and a personal curator's note explaining our
                          selection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DVD Visual Element */}
                <div className="relative flex items-center justify-center">
                  <div className="relative">
                    {/* Main DVD */}
                    <div className="relative h-64 w-64 rounded-full border-4 border-yellow-400/50 bg-gradient-to-br from-white/20 via-white/10 to-white/5 shadow-2xl">
                      {/* DVD surface details */}
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-white/5">
                        {/* Concentric circles */}
                        <div className="absolute inset-4 rounded-full border border-yellow-400/20" />
                        <div className="absolute inset-8 rounded-full border border-yellow-400/15" />
                        <div className="absolute inset-12 rounded-full border border-yellow-400/10" />

                        {/* Center hole */}
                        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-yellow-400/30 bg-white/20 shadow-inner" />
                        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30" />
                      </div>

                      {/* Reflection effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-yellow-300/10 to-transparent" />
                    </div>

                    {/* DVD case shadow */}
                    <div className="absolute -right-2 -top-2 -z-10 h-64 w-64 rounded-full bg-black/20" />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -right-8 top-8 h-16 w-16 rounded-full bg-yellow-400/20 opacity-60" />
                  <div className="absolute -left-6 bottom-12 h-12 w-12 rounded-full bg-orange-400/30 opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="border-t border-yellow-400/30 py-16">
          <div className="container px-4 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-yellow-300">
                Ready to Discover Cinema?
              </h2>
              <p className="text-lg text-yellow-100">
                Join thousands of film lovers who trust us to expand their
                cinematic horizons.
              </p>
              <div className="pt-4">
                <AuthShowcase />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating DVDs at bottom */}
      <FloatingDVDs />
    </HydrateClient>
  );
}
