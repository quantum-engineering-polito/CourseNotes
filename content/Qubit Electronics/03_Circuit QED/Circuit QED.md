
# From atomic physics to quantum optics

The idea of superconducting circuit is to "mimic" the behaviour of real atoms. The great advantage of superconducting circuits is that they can be more easily **tuned**.
As mentioned in the lecture on #SuperconductingCircuit , the energy levels of the atoms are discrete. 

![[natural atom.png|300]]

Furthermore, the quantum state of an atom can be influenced by an electromagnetical radiation, giving rise to *stimulated emission and absorption*. This gives some degree of freedom in controlling its state.

We will be interested in doing the same with SC circuits. But before diving in to how a SC circuit can be controlled trough EM radiation, is useful to review very briefly what happens in the case of natural atoms.

In first approximation, the coupling between an atom and an electromagnetic wave is described by the interaction of the electric field $\vec{E}$  with the electric dipole of the atom $\vec{d}$:

$$H = - \underbrace{\vec{d}\ \cdot \ \vec{E}(t)}_{ g }$$
Where $g$ is a factor that describes the strength of the coupling.

To eccitate a transition between the state $\ket{0}$ and $\ket{1}$ , is possible to use an electromagnetic wave with a frequency $\omega$ that matches the energy difference between this two levels: $\hbar \omega = E_{01} = \hbar \omega_{01}$ . For instance the electric field can be chosen as:
	$$\vec{E}(t) = E_0 \cos(\omega_{01})$$
Where $E_0$ is the amplitude of the electric field.

To increase the strength of the field, and therefore the strength of the coupling $g$ , is possible to exploit a [Fabry Perot cavity](https://en.wikipedia.org/wiki/Fabry–Pérot_interferometer). 

We will not describe in detail this apparutus, we will just limit ourself in describing some of the main important facts.

A Fabry Perot cavity (FPC) is a cavity created between two semi-reflective mirrors. A light beam can be transmitted across a FPC only if the frequency is "close" to a multiple of the resonant frequency of the cavity $\omega_r$, that depends on its geometry. 

The transmitted intensity across the FPC follows a behaviour similar to this:
![[Pasted image 20240308172809.png]]
Where the peaks are centered in correspondence to the resonant frequency (or wavelength).
In this condition, stationary wave are formed inside of the cavity, giving rise to an electric field that is related to the volume of the cavity $V$ by:
$$E \propto \frac{1}{\sqrt V}$$
Therefore the field is stronger the smaller is the cavity.

# From cavity to QED




